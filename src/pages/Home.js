import React from "react";
import { Header, Grid } from "semantic-ui-react";
import CustomBarChart from "../Components/CustomBarChart.jsx";
import CustomPieChart from "../Components/CustomPieChart.jsx";

const items = {
  pie: {
    header: "Rodzaje wędrówek w poprzednich czterech tygodniach",
    meta: "Jak często wybierałeś wędrówki o określonej długości",
  },
  bar: {
    header: "Tyle przespacerowałeś w poprzednich czterech tygodniach",
    meta: "Czas w minutach jaki poświęciłeś na wędrówki",
  },
};

const data = {
  pie: [
    { name: ">10 km", value: 1 },
    { name: "5- 9 km", value: 5 },
    { name: "3 - 4 km", value: 2 },
    { name: "0 - 2 km", value: 8 },
  ],
  bar: [
    { name: "09.03-15.03", czas: 120 },
    { name: "16.03-22.03", czas: 30 },
    { name: "23.03-29.03", czas: 160 },
    { name: "30.03-05.04", czas: 100 },
  ],
};

function Home() {
  return (
    <React.Fragment>
      <Grid centered stackable columns={2} padded>
        <Grid.Column width={16} verticalAlign="middle">
          <Header as="h2">
            Dzień dobry wędrowcze!
            <Header.Subheader>
              Masz tutaj parę statystyk dla odświeżenia pamięci
            </Header.Subheader>
          </Header>
        </Grid.Column>
        <Grid.Column tablet={12} computer={7} largeScreen={6} stretched>
          <CustomPieChart
            pieHeader={items.pie.header}
            pieMeta={items.pie.meta}
            pieData={data.pie}
          />
        </Grid.Column>
        <Grid.Column tablet={12} computer={7} largeScreen={6} stretched>
          <CustomBarChart
            barHeader={items.bar.header}
            barMeta={items.bar.meta}
            barData={data.bar}
          />
        </Grid.Column>
      </Grid>
    </React.Fragment>
  );
}

export default Home;
