export const Plactice4 = () => {
  const calcTotalFee = (num: number) => {
    const total = num * 1.1;
    console.log(total);
  };

  const onClickPlactice1 = () => calcTotalFee(1000);

  return (
    <div>
      <p>練習問題：設定ファイルを触ってみる</p>
      <button
        onClick={() => {
          onClickPlactice1();
        }}
      >
        練習問題4を実行
      </button>
    </div>
  );
};
