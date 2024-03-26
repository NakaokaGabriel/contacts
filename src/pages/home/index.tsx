import { Wrapper } from "@/components/global/wrapper";
import { Container } from "@/components/global/container";
import { Search } from "@/components/global/search";
import { Categories } from "@/components/global/categories";
import { Contacts } from "@/components/global/contacts";
import { Actions } from "@/components/global/actions";

import { useGetContactsQuery } from "@/store/reducers/contact";
import { categories } from "@/mock/categories.mock";

export function Home() {
  const { data, isLoading, isError } = useGetContactsQuery();

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  if (isError) {
    return <h1>404: Alguma coisa deu errado...</h1>;
  }

  return (
    <Wrapper>
      <Container>
        <Search />
        <Categories list={categories} />
        <Contacts contacts={data ?? []} />
        <Actions />
      </Container>
    </Wrapper>
  )
}