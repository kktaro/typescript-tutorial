export const Plactice3 = () => {
  const getTotalFee = (num: number): number => {
    let total = num * 1.1;
    return total;
  };

  const onClickPlactice = () => {
    let total: number = 0;
    total = getTotalFee(1000);
    console.log(total);
  };

  return (
    <div>
      <p>練習問題：変数の型指定</p>
      <button
        onClick={() => {
          onClickPlactice();
        }}
      >
        練習問題3を実行
      </button>
    </div>
  );
};
