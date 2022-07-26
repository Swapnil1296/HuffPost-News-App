import { useLocation } from "react-router-dom"
import './NewsDetailedPage.css'



export const NewsDetailedPage = () => {

    const location = useLocation();
    const {data} = location.state;
    const {title, category, description, image, published} = data.ele;

    return <div className="detailed-page">

        <p>{category[0]}</p>

        <h1>{title}</h1>

        <p>{description}</p>

        <p>{published.slice(0, -6)}</p>

        <img src={image} alt="" />

        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet nesciunt quia atque dolorem fugit ut deserunt ratione nam voluptatum culpa sequi incidunt commodi nulla doloremque aliquam a, voluptate laboriosam similique.
        </p>

        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex atque molestiae, enim voluptatem veniam rem beatae maiores unde expedita. Facere tenetur quas modi expedita fuga facilis iusto officiis dolores nisi?
            Dolore, esse modi recusandae cum dolorum molestiae sint quos tempora delectus! Nesciunt quae, tenetur dignissimos excepturi minima adipisci suscipit quam tempora omnis, earum quas et voluptatem consequuntur aut, consequatur veniam!
            Suscipit veritatis eos, odit inventore optio architecto sed ullam numquam error reiciendis, expedita neque ad sequi officia qui! Id repudiandae animi beatae tenetur quisquam accusantium commodi dolores facilis aliquid eius.
            Laudantium, ipsam pariatur? Dolorem repellendus provident voluptatem corrupti, eum illum qui ipsa odio dolor perspiciatis quasi atque nostrum error eos suscipit deleniti. Porro natus animi, aliquid debitis et ad incidunt.
            Repellendus sed quia non dolor ullam facilis quis sint, neque quasi aut adipisci tempora rerum quo eum excepturi iure eaque fuga? Necessitatibus eius facere nihil architecto est quisquam, a in? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita aliquid, qui adipisci, enim rerum eveniet consectetur eligendi iste laboriosam deserunt quidem, et placeat fugit natus necessitatibus. Fuga minima cum ratione?
            Dolorum incidunt ipsa, vel aut cumque eaque cum esse quam quidem voluptas? Sit pariatur numquam dolor harum, hic nobis excepturi quos quod? Nobis facilis excepturi, odio corporis ipsa sed magni.
            Voluptate molestias magnam aut dolores! Dicta blanditiis sint reprehenderit excepturi voluptatibus quaerat sequi, quam molestiae quia, aperiam exercitationem sed provident libero unde ex odio vel nobis quibusdam maxime, nulla quisquam?
        </p>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab maiores aspernatur cupiditate vero. Quo sequi earum officiis consectetur nostrum magnam delectus autem, fugiat soluta ullam veritatis, pariatur vitae voluptatum beatae!
        Expedita, repudiandae. Tempore iste quo odit nam ducimus, ullam voluptates cupiditate corporis obcaecati debitis magni architecto, quam minima possimus fugiat doloremque tenetur laborum temporibus. Similique totam voluptatem omnis odio itaque.
        Aperiam qui nemo atque tempora eius odio harum et ratione accusamus tenetur repellendus fuga, commodi, quod rem reprehenderit assumenda? Similique itaque magnam dolorum maxime a accusantium, laudantium obcaecati optio omnis.</p>

    </div>
}