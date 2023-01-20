import { createBoard } from '@wixc3/react-board';
import { classes, st } from '../../globals.st.css';

export default createBoard({
    name: 'Button',
    Board: () => (
        <div>
            <button className={classes.defaultButton}>Login</button>
        </div>
    ),
});
