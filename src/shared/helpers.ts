export const getUrlParam = (url: string, paramName: string): string | null => {
  if (!url && paramName) return null;
  paramName = paramName.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  const regexS = `[\\?&]${paramName}=([^&#]*)`;
  const regex = new RegExp(regexS);
  const results = regex.exec(url);
  return results ? results[1] : null;
};
