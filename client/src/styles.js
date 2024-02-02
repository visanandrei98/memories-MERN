import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  AppBar: {
    borderRadius: 15,
    margin: '10px 0', // Ajustează marginea
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
  },
  image: {
    marginLeft: '15px',
  },
}));