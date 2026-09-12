import "./Article.css";
import mars from "./icons/mars.png";
import female from "./icons/female.png";

function Article(props) {
  let { db } = props;
  return (
    <div className="app">
      {
        Object.keys(db).map((elem, index) => {
          // let icon;
          // if(db[elem].pol === 'female') {
          //   icon = female;
          // } else {
          //   icon = mars;
          // } // в return if/else нельзя писать, только до // в return можем писать тернарный оператор
           // ключ всегда добавляется к первому корневому элементу
          return (
            <div className="card" key={index}>
              <img src={db[elem].photo} alt="" />
              <div className="name">
                {db[elem].name} {db[elem].surname}
              </div>
              <div className="pol">
                <img src={(db[elem].pol === 'female') ? female : mars} alt="" />
              </div>
              <div className="age">
                {db[elem].age}
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Article;