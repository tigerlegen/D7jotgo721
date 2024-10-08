// MUI Imports
import Grid from '@mui/material/Grid'

// Components Imports
import TotalEarning from './TotalEarning'
import DepositWithdraw from './DepositWithdraw'

const DashboardAnalytics = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={6} lg={4}>
        <TotalEarning />
      </Grid>

      <Grid item xs={12} lg={8}>
        <DepositWithdraw />
      </Grid>
    </Grid>
  )
}

export default DashboardAnalytics
