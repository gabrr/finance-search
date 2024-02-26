import React from "react";
import Lottie, { PartialLottieComponentProps } from "lottie-react";
import emptyState from "./lottieFiles/emptyState.json";
import loading from "./lottieFiles/loading.json";
import networkError from "./lottieFiles/networkError.json";
import notFoundError from "./lottieFiles/notFoundError.json";

const NotFoundError: React.FC<PartialLottieComponentProps> = (props) => (
  <Lottie {...{ ...props, animationData: notFoundError }} />
);

const Loading: React.FC<PartialLottieComponentProps> = (props) => (
  <Lottie {...{ ...props, animationData: loading }} />
);

const NetworkError: React.FC<PartialLottieComponentProps> = (props) => (
  <Lottie {...{ ...props, animationData: networkError }} />
);

const EmptyState: React.FC<PartialLottieComponentProps> = (props) => (
  <Lottie {...{ ...props, animationData: emptyState }} />
);

export const Animations = {
  NotFoundError,
  Loading,
  NetworkError,
  EmptyState,
};
