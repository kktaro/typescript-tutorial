export const Plactice1 = () => {
  const calcTotalFee = (num) => {
    const total = num * 1.1;
    console.log(total);
  };

  const onClickPlactice1 = () => calcTotalFee(1000);

  return (
    <div>
      <p>練習問題：引数の方指定</p>
      <button
        onClick={() => {
          onClickPlactice1();
        }}
      >
        練習問題1を実行
      </button>
    </div>
  );
};
