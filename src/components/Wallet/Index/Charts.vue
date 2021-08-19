<template>
  <v-row no-gutters>
    <v-col v-for="(chart, n) in charts" class="pa-2" :key="n" sm="12" md="4" lg="4">
      <v-sheet class="rounded-lg pa-2" outlined>
        <v-sparkline
          :value="chart.value"
          :gradient="chart.gradient"
          :smooth="chart.radius || false"
          :padding="chart.padding"
          :line-width="chart.width"
          :stroke-linecap="chart.lineCap"
          :gradient-direction="chart.gradientDirection"
          :fill="chart.fill"
          :type="chart.type"
          :auto-line-width="chart.autoLineWidth"
          auto-draw
        />
        <v-list dense>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>{{ formatBalance({ total: chart.total, currency: 'usd' }) }}</v-list-item-title>
              <v-list-item-subtitle>{{ chart.title }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-sheet>
    </v-col>
  </v-row>
</template>
<script>
import { formatBalance } from '@/utils/numberUtils'
const gradients = [
  ['#F5515F', '#A1051D'],
  ['#13F1FC', '#0470DC'],
  ['#B1EA4D', '#459522']
]

export default {
  name: 'Charts',
  methods: { formatBalance },
  data () {
    return {
      charts: [
        {
          title: 'Maximum Spent',
          total: 26000.00,
          width: 2,
          radius: 25,
          padding: 8,
          lineCap: 'round',
          gradient: gradients[0],
          value: [10, 4, 5, 9, 5, 10, 3, 5, 0, 0, 1],
          gradientDirection: 'top',
          gradients,
          fill: false,
          type: 'trend',
          autoLineWidth: false
        },
        {
          title: 'Maximum Net Revenue',
          total: 60000.00,
          width: 2,
          radius: 25,
          padding: 8,
          lineCap: 'round',
          gradient: gradients[1],
          value: [9, 6, 8, 9, 8, 6, 8, 7, 7, 8, 9],
          gradientDirection: 'top',
          gradients,
          fill: false,
          type: 'trend',
          autoLineWidth: false
        },
        {
          title: 'Annual Net Revenue',
          total: 200000.00,
          width: 2,
          radius: 25,
          padding: 8,
          lineCap: 'round',
          gradient: gradients[2],
          value: [0, 2, 5, 9, 5, 10, 3, 5, 7, 9, 10],
          gradientDirection: 'top',
          gradients,
          fill: false,
          type: 'trend',
          autoLineWidth: false
        }
      ]
    }
  }
}
</script>
