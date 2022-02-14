const ProcessUploadData = (data) => {
  const date = moment(data);
  const standard = moment("2021-09-16T13:15:02");
  return `${date.from(standard)}`;
};

export { ProcessUploadData };
