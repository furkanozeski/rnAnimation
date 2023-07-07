import AppProviderProp from '@src/types/AppProvider/AppProviderPropType';


function ApplicationProvider(_props: AppProviderProp) {
  const { children } = _props;

  return children;
}

export default ApplicationProvider;
