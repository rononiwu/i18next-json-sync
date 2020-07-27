
// Returns true if the folder structure has a language code as part of its path name.
// i.e **/locales/en/foo.json, **/locales/fr/foo.json
export function hasLanguageOnPathName(filename: string) {
	if(filename.match('((?:locales)\/[^\/]+\/[^\/]+(?:.json)$)')) {
		return true;
	}
	return false;
}
