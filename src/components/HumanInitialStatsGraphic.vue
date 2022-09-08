<template>
  <div id="chart">
    <ApexCharts
      dark
      type="radar"
      width="380"
      :options="chartOptions"
      :series="series"
    ></ApexCharts>
  </div>
</template>

<script>
export default {
  name: "HumanInitialStatsGraphic",

  data() {
    return {
      series: [
        {
          name: "Human initial stats",
          data: [20, 10, 20, 10],
        },
      ],

      chartOptions: {
        theme: {
          mode: "dark",
          monochrome: {
            enabled: true,
          },
        },
        chart: {
          width: 500,
          height: 500,
          background: "rgb(0, 0, 0, 0)",
          type: "radar",
        },
        labels: ["Attack", "Defense", "Magic"],

        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",

            type: "horizontal",
            shadeIntensity: 0.3,
          },
        },
        title: {
          text: "Initial statistics of humans",
        },
        xaxis: {
          categories: ["Attack", "Defense", "Magic", "Durability"],
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 400,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    };
  },
};
</script>

<style scoped></style>
