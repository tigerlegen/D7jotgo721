//MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

// Components Imports
import OptionMenu from '@core/components/option-menu'
import CustomAvatar from '@core/components/mui/Avatar'

// Vars
const data = [
  {
    stats: '245',
    title: 'Mining session',
    color: 'primary',
    icon: 'ri-pie-chart-2-line'
  },
  {
    stats: '12',
    title: 'Friends',
    color: 'success',
    icon: 'ri-group-line'
  },
  {
    stats: '190',
    color: 'warning',
    title: 'Task',
    icon: 'ri-macbook-line'
  },
  {
    stats: '8,800 ZPH',
    color: 'info',
    title: 'Revenue',
    icon: 'ri-money-dollar-circle-line'
  }
]

const Transactions = () => {
  return (
    <Card className='bs-full'>
      <CardHeader
        title='Activities'
        // subheader={
        //   <p className='mbs-3'>
        //     <span className='font-medium text-textPrimary'>Total 48.5% Growth 😎</span>
        //     <span className='text-textSecondary'>this month</span>
        //   </p>
        // }
      />
      <CardContent className='!pbs-5-'>
        <Grid container spacing={2}>
          {data.map((item, index) => (
            <Grid item xs={6} md={3} key={index}>
              <div className='flex items-center gap-3'>
                <CustomAvatar variant='rounded' color={item.color} className='shadow-xs'>
                  <i className={item.icon}></i>
                </CustomAvatar>
                <div>
                  <Typography>{item.title}</Typography>
                  <Typography variant='h5'>{item.stats}</Typography>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Transactions
