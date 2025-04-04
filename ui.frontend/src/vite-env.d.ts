declare module "*.module.scss";
declare module "*.png";
declare module "*.svg";
declare module "*.jpeg";
declare module "*.jpg";

// Props from AEM
interface Window {
  propsTemplate?: {
    property1?: string;
    property2?: string;
    [key: string]: any;
  };
}
