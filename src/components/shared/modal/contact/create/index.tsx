import { useForm, Controller } from "react-hook-form"
import Select from 'react-select'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { useCreateContactMutation } from "@/store/reducers/contact";

import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { LineDivider } from "@/components/ui/line-divider";

import * as styles from './styles';

type InputType = {
  name: string;
  cellphone: string;
  telphone: string;
  work_celphone: string;
  group: {
    label: string;
    value: "Familia" | 'Todos';
  }
};

const options: InputType['group'][] = [
  { value: 'Todos', label: 'Todos' },
  { value: 'Familia', label: 'Familia' }
]

const schema = yup
  .object({
    name: yup.string().matches(/([a-zA-Z]+) [a-zA-Z]/, 'Formato Inválido').required(),
    cellphone: yup.string().matches(/(\(?[1-9]{2}\)? ?)?(?:9\d{4}[-.\s]?\d{4}|\d{4}[-.\s]?\d{4})/, 'Número Inválido').required(),
    telphone: yup.string().matches(/(\(?[1-9]{2}\)? ?)?(?:9\d{4}[-.\s]?\d{4}|\d{4}[-.\s]?\d{4})/, 'Número Inválido').required(),
    work_celphone: yup.string().matches(/(\(?[1-9]{2}\)? ?)?(?:9\d{4}[-.\s]?\d{4}|\d{4}[-.\s]?\d{4})/, 'Número Inválido').required(),
    group: yup.object().shape({
      value: yup.string().required("Required"),
      label: yup.string().required("Required"),
    }),
  });

export type CreateContactModalProps = {
  setIsOpen: (active: boolean) => void;
  isOpen: boolean;
}

export function CreateContactModal({ isOpen, setIsOpen }: CreateContactModalProps) {
  const [createContact, data] = useCreateContactMutation();
  const { isLoading } = data;

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<InputType>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      cellphone: "",
      telphone: "",
      work_celphone: "",
      group: {
        label: 'Todos',
        value: 'Todos',
      }
    }
  });

  const onSubmit = (data: InputType) => {
    createContact({
      ...data,
      group: data.group.value
    });
    reset();
    setIsOpen(false);
  }

  return (
    <Modal
      title="Novo Contato"
      setIsOpen={setIsOpen}
      isOpen={isOpen}
      children={
        <styles.Form onSubmit={handleSubmit(onSubmit)}>
          <styles.Container>
            <styles.Label htmlFor="name">
              Nome Completo

              <styles.Input autoComplete="off" placeholder="Digite Aqui" type="text" {...register('name')} />

              <p>{errors.name?.message}</p>
            </styles.Label>

            <styles.Label htmlFor="telphone">
              Telefone residencial.

              <styles.Input autoComplete="off" placeholder="Digite Aqui" type="text" {...register('telphone')} />

              <p>{errors.telphone?.message}</p>
            </styles.Label>

            <styles.Label htmlFor="cellphone">
              Telefone celular.

              <styles.Input autoComplete="off" placeholder="Digite Aqui" type="text" {...register('cellphone')} />

              <p>{errors.cellphone?.message}</p>
            </styles.Label>

            <styles.Label htmlFor="work_celphone">
              Celular do Trabalho.

              <styles.Input autoComplete="off" placeholder="Digite Aqui" type="text" {...register('work_celphone')} />

              <p>{errors.work_celphone?.message}</p>
            </styles.Label>

            <Controller
              name="group"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={options}
                  styles={{
                    control: (styles) => ({
                      ...styles,
                      zIndex: 100
                    }),
                    menu: (styles) => ({
                      ...styles,
                    })
                  }}
                />
              )}
            />
            <p>{errors.group?.message}</p>
          </styles.Container>

          <LineDivider />

          <styles.Action>
            <Button text="Criar Contato" type="submit" disabled={isLoading} />
          </styles.Action>
        </styles.Form>
      }
    />
  )
}