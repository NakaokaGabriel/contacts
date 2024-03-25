import { Wrapper } from "@/components/global/wrapper";
import { Container } from "@/components/global/container";
import { Search } from "@/components/ui/search";

export function Home() {
  return (
    <Wrapper>
      <Container>
        <Search />
        <h1>hello</h1>
      </Container>
    </Wrapper>
  )
}