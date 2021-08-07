import React, { Suspense } from "react";
import Loading from './Loading';

const ConncreteSuspense = props => {
  return <Suspense fallback={<Loading />}>{props.children}</Suspense>;
};

export default ConncreteSuspense;