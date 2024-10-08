// MUI Imports
import Grid from '@mui/material/Grid'

// Components Imports
import Award from './Award'


const DashboardAnalytics = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={4}>
        <Award />
      </Grid>
     
    </Grid>
  )
}

export default DashboardAnalytics
