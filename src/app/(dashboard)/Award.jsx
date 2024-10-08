// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const Award = () => {
  return (
    <Card>
      <CardContent className='flex flex-col gap-2 relative items-start'>
        <div>
          <Typography variant='h5'>Congratulations John! 🎉</Typography>
          <Typography>Your team mining have reached</Typography>
        </div>
        <div>
          <Typography variant='h4' color='primary'>
            4,020 ZPH
          </Typography>
          <Typography>Rate: 7/hrs 🚀</Typography>
        </div>
        <Button size='small' variant='contained'>
          Add more
        </Button>
        <img
          src='/images/pages/trophy.png'
          alt='trophy image'
          height={102}
          className='absolute inline-end-7 bottom-6'
        />
      </CardContent>
    </Card>
  )
}

export default Award
