import * as FileSystem from 'expo-file-system'
const fs = {
  readLocalString: FileSystem.readAsStringAsync,
  dir: FileSystem.documentDirectory,
  mkdir: FileSystem.makeDirectoryAsync,
  readDir: FileSystem.readDirectoryAsync,
  download: FileSystem.downloadAsync,
  delete: FileSystem.deleteAsync,
}

export default fs
