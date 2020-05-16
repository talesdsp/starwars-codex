export const setModal = (btn: NodeListOf<HTMLButtonElement>) => {
  if (document.activeElement?.nextSibling) {
    btn.forEach((v) => {
      (v.nextSibling as HTMLButtonElement)?.removeAttribute("data-openpreview");
    });
    (document.activeElement.nextSibling as Element).setAttribute("data-openpreview", "true");
  }

  return document.activeElement?.nextSibling;
};

export const getButton = () => {
  const btn = document.querySelectorAll("button");
  return btn;
};

export const onKeyUp = (
  ev: { keyCode: number },
  btn: NodeListOf<HTMLButtonElement>,
  index: number,
  cb: Function
) => {
  if (ev.keyCode === 38 && index > 0) {
    index--;
    btn[index].focus();
  } else if (ev.keyCode === 40 && index < btn.length - 1) {
    index++;
    btn[index].focus();
  }
  cb(btn);

  return index;
};

export const onPoint = (
  ev: PointerEvent,
  btn: NodeListOf<HTMLButtonElement>,
  index: number,
  cb: Function,
  i?: number
) => {
  if (i) index = i;

  (ev.target as HTMLElement).focus();

  cb(btn);

  return index;
};

export const initNavigation = (): any => {
  let btn = getButton();
  let index = 0;

  if (btn.length === 0) {
    return setTimeout(initNavigation, 200);
  }

  document.addEventListener("keyup", (ev) => {
    index = onKeyUp(ev, btn, index, setModal);
  });

  btn.forEach((a, i) =>
    a.addEventListener("pointerenter", (ev) => {
      index = onPoint(ev, btn, index, setModal, i);
    })
  );

  btn.forEach((a) =>
    a.addEventListener("pointerleave", (ev) => {
      index = onPoint(ev, btn, index, setModal);
    })
  );
  btn[0].focus();

  setModal(btn);
};
