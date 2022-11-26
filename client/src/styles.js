import { makeStyles } from '@mui/styles';
import { borderRadius, flexbox } from '@mui/system';

export default makeStyles(() => ({
    appBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        margin: '30px 0',
    },
    heading: {
        color: 'red',
    },
    image: {
        margin: '15px',
        width: '50px',
    }
}))