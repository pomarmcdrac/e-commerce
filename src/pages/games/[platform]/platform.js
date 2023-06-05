import { Container } from "semantic-ui-react";
import { size } from "lodash";
import { BasicLayout } from "@/layouts";
import { GridGames, Separator, NoResult, Pagination, Seo } from "@/components/Shared";

export default function PlatformPage(props) {
    const { games, platform, pagination } = props;
    const hasProducts = size(games) > 0;
    
  return (
    <>
      <Seo title={`Juegos de ${platform.data[0].attributes.title}`} />
      <BasicLayout relative>
        <Container>
          <Separator height={50} />
          <h2>{platform.data[0].attributes.title}</h2>
          {hasProducts ? (
            <>
              <GridGames games={games} />
              <Separator height={30} />
              <Pagination currentPage={pagination.page} totalPages={pagination.pageCount} />
            </>
          ) : (
            <NoResult text={`La categoria ${platform.data[0].attributes.title} aun no tiene productos`} />
          )}
          <Separator height={100} />
        </Container>
      </BasicLayout>
    </>
  )
}
