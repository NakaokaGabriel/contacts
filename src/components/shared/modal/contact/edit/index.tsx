import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form"
import Select from 'react-select'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { useGetContactByIdQuery, useUpdateContactMutation } from "@/store/reducers/contact";

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
  id: string;
}

export function EditContactModal({ isOpen, setIsOpen, id }: CreateContactModalProps) {
  const { data } = useGetContactByIdQuery(id);
  const [updateContact] = useUpdateContactMutation();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
    setValue
  } = useForm<InputType>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: data?.name,
      cellphone: data?.name ?? '',
      telphone: data?.name ?? '',
      work_celphone: data?.name ?? '',
      group: {
        label: data?.group ?? '',
        value: data?.group,
      }
    }
  });

  useEffect(() => {
    setValue('name', data?.name ?? "", { shouldValidate: true });
    setValue('cellphone', data?.cellphone ?? "", { shouldValidate: true });
    setValue('telphone', data?.telphone ?? "", { shouldValidate: true });
    setValue('work_celphone', data?.work_celphone ?? "", { shouldValidate: true });
    setValue('group', {
      value: data?.group ?? 'Todos',
      label: data?.group ?? 'Todos'
    }, { shouldValidate: true });
  }, [data, setValue]);

  const onSubmit = (data: InputType) => {
    updateContact({
      id,
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
            <Button text="Editar Contato" type="submit" />
          </styles.Action>
        </styles.Form>
      }
    />
  )
}