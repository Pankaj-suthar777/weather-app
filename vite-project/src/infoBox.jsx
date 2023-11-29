import "./info.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}){
    let RAIN_url = 'https://images.unsplash.com/photo-1415394171664-b29caa4dca77?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

    let SUMMER_url = 'https://images.unsplash.com/photo-1491929007750-dce8ba76e610?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

    let COLD_url = 'https://images.unsplash.com/photo-1612787733353-dd9ead94246d?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

    return (
        <div className="info">
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image= {info.humidity > 80 ? RAIN_url : info.temp  > 15 ? SUMMER_url : COLD_url }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {info.city} &nbsp; {info.humidity > 80 ? <ThunderstormIcon></ThunderstormIcon> : info.temp  > 15 ? <WbSunnyIcon></WbSunnyIcon> : <AcUnitIcon></AcUnitIcon>}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={'span'}>
        <p>Tempreature : {info.temp}</p>
        <p>Humidity : {info.humidity}</p>
            <p>Max Temprature : {info.tempMax}</p>
            <p>Min Temorature : {info.tempMin}</p>
            <p> The Weather can be described as {info.weather} and feels like {info.feelsLike}</p>
        </Typography>
      </CardContent>
    </Card>
            
        </div>
    )
}