export default function appendToEachArrayValue(array, appendString) {
	  const newArray = [];
	  for (const idx of array) {
		      const value = array[idx];
		      newArray.push(`${appendString}${idx}`);
		    }

	  return newArray;
}
