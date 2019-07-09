import React, { useState, useRef } from "react";
import Link from "next/link";
import Modal from "../components/Modal";

const App = () => {
  const [modal, setModal] = useState(false);

  const _modal = useRef(null);

  const handleClick = () => {
    setModal(true);
    window.history.pushState("", "", "/test");
  };

  const closeModal = e => {
    if (!modal) return;
    if (_modal.current._content.current.contains(e.target)) return;
    setModal(false);
    window.history.go(-1);
  };

  return (
    <div>
      {modal && <Modal ref={_modal} onClick={closeModal} />}
      <h1>Don't forgot STAR in github plz 😍</h1>
      <h2>Simple modal route</h2>
      <button onClick={handleClick} style={{ marginBottom: "30px" }}>
        Open Modal
      </button>
      <br />
      <Link href={"/test"}>
        <a>Open Page</a>
      </Link>
    </div>
  );
};

export default App;
