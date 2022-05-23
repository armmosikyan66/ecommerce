import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    root: {
        maxWidth: '100%',
    },
    media: {
        maxWidth: '100%',
        height: '335px'
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },
}));
