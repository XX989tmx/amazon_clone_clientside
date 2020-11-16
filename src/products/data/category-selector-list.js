// input用
// grandparent => parent = > child => grandchild => grandgrandchild というネスト関係
// 例炊飯器の場合
// 家電、カメラ、AV機器(grandparent) => 家電、カメラ、AV機器", "中古ストア(parent) => キッチン家電(child) => 炊飯器、精米機（grand child） => 圧力IH炊飯器（grand grand child）
//grand child をスキーマの'categories'に、grand childをスキーマの'parent category'に、grand child からgrand parentまでのすべてのノードを、スキーマ上のancestors categoriesに、入れるような配置のSelectorインプットを作る。そのための、オブジェクト配列を用意し、Selectorコンポーネントに渡す。そのためのデータをここで定義。