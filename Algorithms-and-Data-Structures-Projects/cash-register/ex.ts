type availableCurrency = 'PENNY' | 'NICKEL' | 'DIME' | 'QUARTER' 
| 'ONE' |'FIVE' | 'TEN' | 'TWENTY' | 'ONE HUNDRED';

type Cid = [ availableCurrency, number, number? ];

type Status = 'OPEN' | 'INSUFFICIENT_FUNDS' | 'CLOSED';

interface CashResponse {
  status: Status,
  change: Cid[]
};

interface CurrencyUnitAmount { 
  name: availableCurrency,
  value: number,
};

const currencyUnitAmount: CurrencyUnitAmount[] = [
  { name: 'ONE HUNDRED', value: 10000 },
  { name: 'TWENTY', value: 2000 }, 
  { name: 'TEN', value: 1000 },
  { name: 'FIVE', value: 500 },
  { name: 'ONE', value: 100 },
  { name: 'QUARTER', value: 25 },
  { name: 'DIME', value: 10 },
  { name: 'NICKEL', value: 5 },
  { name: 'PENNY', value: 1 },
]

function checkCashRegister(price: number, cash: number, cid: Cid[]): CashResponse {
  let changeDue = ((cash * 100) - (price * 100));
  let cidResponse: Cid[] = []

  const moneyIsEnough = cid.reduce((a: number, c: Cid) => c[1] + a, 0);

  if ((moneyIsEnough * 100) === changeDue) return { status: 'CLOSED', change: cid };
  if (moneyIsEnough < price) return { status: 'INSUFFICIENT_FUNDS', change: [] };

  cid.reverse().forEach((c: Cid) => {
    let currency = currencyUnitAmount.find((curr) => curr.name === c[0]);

    let quantityInCash = currency && (Math.round((c[1] * 100) / currency.value)) || 0;
    let divisibleTimes = currency && (Math.floor(changeDue / currency.value)) || 0;

    while (!(divisibleTimes <= quantityInCash)) {
      divisibleTimes--;
    }

    let restToBeDeducted = currency && (changeDue - (currency?.value * divisibleTimes)) || 0;

    if (currency && currency.value <= changeDue && quantityInCash) {
      changeDue = restToBeDeducted;
      cidResponse.push([currency.name, (currency.value * divisibleTimes / 100)]);
    }
  });

  return { status: 'OPEN', change: cidResponse };
}

export default checkCashRegister;

  