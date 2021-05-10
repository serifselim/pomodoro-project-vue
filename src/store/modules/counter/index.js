export const counter = {
    state:{
        pM: 25,
        pS: 0,
        pMText: 25,
        pSText: "00",
        pCount: 0,
        pFinishedCount: 1,
        pIntervalArr: [25, 5, 25, 5, 25, 5, 25, 15],
        Interval: null,
        isStart: true,
    },
    actions: {
        startPomo({ state, dispatch }) {
            state.isStart = false;
            state.Interval = setInterval(() => dispatch('pomoTimer'), 1000);
        },
        stopPomo({ state }) {
            state.isStart = true;
            clearInterval(state.Interval);
        },
        pomoTimer({ state, dispatch }) {
            if (state.pS <= 0) {
                state.pM--;
                state.pM < 10 ? (state.pMText = "0" + state.pM) : (state.pMText = state.pM);
                state.pS = 59;
                state.pSText = state.pS;
            } else {
                state.pS--;
                state.pS < 10 ? (state.pSText = "0" + state.pS) : (state.pSText = state.pS);
            }
            if (state.pM <= 0 && state.pS <= 0) {
                state.isStart = true;
                state.pCount < 7 ? state.pCount++ : (state.pCount = 0);
                nextStage(state);
                dispatch('stopPomo');
            }
        },
    },
}

function nextStage(state){
    switch (state.pIntervalArr[state.pCount]) {
        case 25:
            changeStatus("#DB524D", "work");
            break;
        case 5:
            changeStatus("#31b853", "short");
            state.pFinishedCount++;
            break;
        default:
            changeStatus("#305e9b", "long");
            break;
    }
    state.pM = state.pIntervalArr[state.pCount];
    state.pM < 10 ? (state.pMText = "0" + state.pM) : (state.pMText = state.pM);
}

function changeStatus(color, id){
    const work = document.getElementById("work");
    const short = document.getElementById("short");
    const long = document.getElementById("long");
    document.documentElement.style.setProperty("--active-color", color);
    switch (id) {
        case "work":
            changeStyle(work, short, long);
            break;
        case "short":
            changeStyle(short, work, long);
            break;
        default:
            changeStyle(long, work, short);
            break;
    }
}

function changeStyle(targetBtn, nullBtn1, nullBtn2){
    targetBtn.style.background = "#fff";
    targetBtn.style.color = "var(--active-color)";
    nullBtn1.style = null;
    nullBtn2.style = null;
}