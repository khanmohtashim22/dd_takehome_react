export const getClasses = ({ styles = {}, classes = [], className = '' }) => {
  const classesInStyles = classes.filter(_class => !!_class).map(name => styles[name])
  return [...classesInStyles, className].join(' ').trim()
}