import { JSX } from 'solid-js/jsx-runtime';
import * as Icons from './icons';
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
        <div class='flex flex-col w-full gap-12'>
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

// Here for later extension
type MenuButtonProps = {
    icon: JSX.Element;
    onclick?: () => {};
};

function MenuButton(props: MenuButtonProps) {
    return (
        <button
            class='grid place-items-center size-16 bg-bg-dark text-white stroke-white'
            onclick={props.onclick}
        >
            {props.icon}
        </button>
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
            <div class='flex flex-col justify-between w-full h-full pl-12 py-8 gap-4'>
                <Results wins={613} losses={114} draws={312} />

                {/* Console */}
                <div class='flex flex-col gap-2 w-[580px]'>
                    {/* Heading */}
                    <div class='grid grid-cols-[1fr_min-content_1fr] text-lg w-full text-center'>
                        <span>V1_SIMPLE</span>
                        <div class='w-2'></div>
                        <span>V2_COMPLEX</span>
                    </div>
                    {/* Console Body */}
                    <div class='w-full grid grid-cols-[1fr_min-content_1fr] rounded-xl h-60 bg-bg-dark text-text-light'>
                        <div class='p-4 overflow-scroll'>
                            <span>uci</span>
                            <br />
                            <span class='text-white'>id name Chress</span>
                            <br />
                            <span class='text-white'>id author LucDeCaf</span>
                            <br />
                            <span class='text-white'>uciok</span>
                            <br />
                            <span>ucinewgame</span>
                            <br />
                            <span>isready</span>
                            <br />
                            <span class='text-white'>readyok</span>
                            <br />
                            <span>position startpos</span>
                            <br />
                            <span>go</span>
                            <br />
                            <span>bestmove e2e4</span>
                            <br />
                        </div>
                        <div class='h-full w-2 bg-bg-light'></div>
                        <div class='p-4 overflow-scroll'>
                            <span>uci</span>
                            <br />
                            <span class='text-white'>id name Chress</span>
                            <br />
                            <span class='text-white'>id author LucDeCaf</span>
                            <br />
                            <span class='text-white'>uciok</span>
                            <br />
                            <span>ucinewgame</span>
                            <br />
                            <span>isready</span>
                            <br />
                            <span class='text-white'>readyok</span>
                            <br />
                            <span>position startpos e2e4</span>
                            <br />
                            <span>go</span>
                            <br />
                            <span>bestmove e7e5</span>
                            <br />
                        </div>
                    </div>
                </div>
            </div>

            <div class='absolute top-8 right-8 flex min-w-max h-min overflow-hidden gap-2 rounded-md'>
                <MenuButton icon={Icons.Save} />
                <MenuButton icon={Icons.Settings} />
                <MenuButton icon={Icons.Pause} />
            </div>
        </main>
    );
}

export default App;
