export const setModal = (btn: NodeListOf<HTMLButtonElement>) => {
  if (document?.activeElement?.nextSibling) {
    btn.forEach((v) => {
      (v.nextSibling as HTMLButtonElement)?.removeAttribute("data-openpreview");
    });
    (document.activeElement.nextSibling as Element).setAttribute("data-openpreview", "true");
  }
};

export const getButton = () => {
  const btn = document.querySelectorAll("button");
  return btn;
};

export const onType = (ev: KeyboardEvent, btn: NodeListOf<HTMLButtonElement>, index: number) => {
  if (ev.keyCode === 38 && index > 0) {
    index--;
    btn[index].focus();
  } else if (ev.keyCode === 40 && index < btn.length - 1) {
    index++;
    btn[index].focus();
  }
  setModal(btn);

  return index;
};

export const onPoint = (
  ev: PointerEvent,
  btn: NodeListOf<HTMLButtonElement>,
  index: number,
  i?: number
) => {
  if (i) index = i;

  (ev.target as HTMLElement).focus();

  setModal(btn);

  return index;
};

export const initNavigation = (): any => {
  let btn = getButton();
  let index = 0;

  if (btn.length === 0) {
    return setTimeout(initNavigation, 200);
  }

  document.addEventListener("keyup", (ev) => {
    index = onType(ev, btn, index);
  });
  btn.forEach((a, i) =>
    a.addEventListener("pointerenter", (ev) => {
      index = onPoint(ev, btn, index, i);
    })
  );
  btn.forEach((a) =>
    a.addEventListener("pointerleave", (ev) => {
      index = onPoint(ev, btn, index);
    })
  );
  btn[0].focus();

  setModal(btn);
};
