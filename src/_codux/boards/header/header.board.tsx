import { createBoard } from '@wixc3/react-board';
import { Header } from '../../../header';
import { Button } from '../../../components/button/button';

export default createBoard({
    name: 'Header',
    Board: () => (
        <Header>
            <Button />
        </Header>
    ),
    environmentProps: {
        canvasWidth: 1100,
    },
});
