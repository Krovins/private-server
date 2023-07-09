import accs from "../acc.json"

function getAcc(id: number) {
    return accs.find(acc => acc.id == id);
}

export { getAcc };