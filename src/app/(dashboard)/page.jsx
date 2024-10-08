// MUI Imports
import Grid from '@mui/material/Grid'

// Components Imports
import Award from './Award'
import Transactions from './Transactions'
import WeeklyOverview from './WeeklyOverview'


const DashboardAnalytics = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={4}>
        <Award />
      </Grid>

      <Grid item xs={12} md={6} lg={4}>
        <WeeklyOverview />
      </Grid>
      <Grid item xs={12} md={8} lg={8}>
        <Transactions />
      </Grid>
      
    </Grid>
  )
}

export default DashboardAnalytics
