import { useState } from "react";
import ModalWindow from "shared/componets/ModalWindow/ModalWindow";

const CatalogPage = () => {
  const [modalDataIsOpen, setModalDataOpen] = useState(false);
  return (
    <>
      <h2>CatalogPage</h2>

      <button onClick={() => setModalDataOpen(true)}>Modal Data</button>

      <ModalWindow
        isOpen={modalDataIsOpen}
        onClose={() => setModalDataOpen(false)}
      >
        <h2>Внимание!</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          consectetur porro nihil commodi dolor laborum inventore facere
          consequatur ea ratione voluptatem quisquam, voluptas, error doloribus
          quam perspiciatis reprehenderit aliquid impedit, repellat doloremque.
          Iste nobis, ratione pariatur corrupti adipisci voluptatibus iure
          aliquid. Earum consectetur eum reprehenderit doloremque eligendi
          maiores, fugiat voluptates error nisi rem, iste modi nam repudiandae
          beatae sint harum totam soluta placeat quos dolores iusto, magnam
          sequi suscipit ut! Dolorem vel voluptas illum soluta. Odio, voluptatum
          dolor illo, deserunt doloribus illum earum voluptate quasi animi
          accusamus quisquam suscipit corporis sit dignissimos inventore
          obcaecati repellendus? Praesentium quidem eos vitae corporis ipsum qui
          a perferendis asperiores hic adipisci ex voluptate veritatis mollitia
          ratione nisi ab enim harum, obcaecati quam tenetur expedita odio.
          Excepturi impedit necessitatibus quos placeat ex tempora, voluptas
          pariatur maxime. Ipsam doloremque, repellat reprehenderit
          necessitatibus laudantium delectus suscipit accusantium beatae unde
          quam? Distinctio eum tempora laborum ratione provident. Minima?
        </p>
      </ModalWindow>
    </>
  );
};

export default CatalogPage;
