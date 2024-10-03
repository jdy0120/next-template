import { keyframes, styled } from "@stitches/react";

const loaderAnimation = keyframes({
  "0%": { backgroundSize: "20% 50%, 20% 50%, 20% 50%" },
  "20%": { backgroundSize: "20% 20%, 20% 50%, 20% 50%" },
  "40%": { backgroundSize: "20% 100%, 20% 20%, 20% 50%" },
  "60%": { backgroundSize: "20% 50%, 20% 100%, 20% 20%" },
  "80%": { backgroundSize: "20% 50%, 20% 50%, 20% 100%" },
  "100%": { backgroundSize: "20% 50%, 20% 50%, 20% 50%" },
});

const LoaderContainer = styled("div", {
  position: "absolute",
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const Loader = styled("div", {
  width: "45px",
  aspectRatio: "0.75",
  background: `
    no-repeat linear-gradient($primary400 0 0) 0% 50%,
    no-repeat linear-gradient($primary400 0 0) 50% 50%,
    no-repeat linear-gradient($primary400 0 0) 100% 50%
  `,
  animation: `${loaderAnimation} 1s infinite linear alternate`,
});

export default function LoaderComponent() {
  return (
    <LoaderContainer>
      <Loader />
    </LoaderContainer>
  );
}
