// MUI Imports
import Grid from '@mui/material/Grid'
import Transactions from './Transactions'

// Components Imports

import Table from './Table'

const DashboardAnalytics = () => {
  return (
    <Grid container spacing={6}>
      
      <Grid item xs={12}>
        <Table />
      </Grid>
    </Grid>
  )
}

export default DashboardAnalytics
