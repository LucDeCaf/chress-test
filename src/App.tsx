import './App.css';

function Board() {
    const tiles = [];

    for (let rank = 0; rank < 8; rank++) {
        for (let file = 0; file < 8; file++) {
            tiles.push(
                <div
                    class={
                        'size-16 ' +
                        ((rank + file) % 2 == 0
                            ? 'bg-tile-dark'
                            : 'bg-tile-light')
                    }
                ></div>
            );
        }
    }

    return (
        <div class='grid grid-rows-8 grid-cols-8 gap-0 w-max h-min overflow-hidden rounded-md'>
            {tiles}
        </div>
    );
}

type ResultBarProps = {
    variant: keyof ResultsProps;
    largest: number;
    count: number;
};

function ResultBar(props: ResultBarProps) {
    let text = '';
    let color = '';

    switch (props.variant) {
        case 'wins':
            text = 'WINS';
            color = 'bg-win';
            break;

        case 'losses':
            text = 'LOSSES';
            color = 'bg-loss';
            break;

        case 'draws':
            text = 'DRAWS';
            color = 'bg-draw';
            break;
        default:
            break;
    }

    const WIDTH_PX = 450;
    const percentageFilled = props.count / props.largest;
    const adjustedWidth = percentageFilled * WIDTH_PX;

    return (
        <div class='flex flex-col gap-2 text-2xl'>
            <div>{text}</div>
            <div
                class={
                    'rounded-lg flex items-center pl-4 text-black min-w-20 h-12 ' +
                    color
                }
                style={{
                    width: `${adjustedWidth}px`,
                }}
            >
                {props.count}
            </div>
        </div>
    );
}

type ResultsProps = {
    wins: number;
    losses: number;
    draws: number;
};

function Results(props: ResultsProps) {
    const largest = Math.max(props.wins, props.losses, props.draws);

    return (
        <div class='flex flex-col w-full gap-12 p-12'>
            <ResultBar largest={largest} count={props.wins} variant='wins' />
            <ResultBar
                largest={largest}
                count={props.losses}
                variant='losses'
            />
            <ResultBar largest={largest} count={props.draws} variant='draws' />
        </div>
    );
}

function App() {
    return (
        <main class='p-8 w-full h-full flex justify-between'>
            <div class='flex flex-col justify-between w-min h-full px-4 py-2'>
                <div class='text-2xl flex flex-col gap-8'>
                    <div>V1_SIMPLE</div>
                    <Board />
                    <div>V2_COMPLEX</div>
                </div>
                <div class='flex flex-col'>
                    <div class='text-3xl'>
                        <span class='text-white'>GAME 1040</span>
                        <span>/1500</span>
                    </div>
                    <div class='text-xl text-text-dark'>
                        Queen's Gambit Declined
                    </div>
                </div>
            </div>

            <Results wins={613} losses={114} draws={312} />
        </main>
    );
}

export default App;
