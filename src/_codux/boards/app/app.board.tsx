import { createBoard } from '@wixc3/react-board';
import { App } from '../../../app';
import { classes } from '../../../header.st.css';

export default createBoard({
    name: 'App',
    Board: () => <App className={classes.app} />,
    environmentProps: {
        canvasHeight: 243,
        windowWidth: 1026,
    },
});
