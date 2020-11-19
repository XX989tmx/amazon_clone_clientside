import React from 'react';

const BestSellerRankingTop50 = () => {
  //注文確定時に、totalNumberOfSold filed(追加する)に１を毎回足していく必要あり。このfieldの数が多い順に並べ、先頭５０個に切った配列を受け取る。各カテゴリーレベルごとに行う必要あり(各カテゴリーレベルごとの売れ筋Top50)。eg categories, parentCategories, ancestorCategories
  //  backend logic:
  // await Product.find({categories:categories}).sort({totalNumberOfSold: -1}).limit(50);
    return (
      <div>
        <h1>BestSellerRankingTop50</h1>
      </div>
    );
}

export default BestSellerRankingTop50;
