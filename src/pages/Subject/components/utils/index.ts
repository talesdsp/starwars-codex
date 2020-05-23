export const closeModal: React.MouseEventHandler<Node> = (ev) => {
  (ev.target as Node).parentElement?.removeAttribute("data-preview");
};
