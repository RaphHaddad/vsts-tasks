var fs = require('fs');
var request = require('request');
var shell = require('shelljs');


var file = fs.createWriteStream('c:\temp\7zip.zip');
if (shell.test('-f', file)) {
    console.log('Removing ' + file);
    shell.rm(file);
}

console.log(shell.ls('-l', file));
// request.get('https://vstsagenttools.blob.core.windows.net/tools/7zip/1/7zip.zip')
//     .on('response', function (response) {
//         if (response.statusCode != 200) {
//             throw new Error('File download error. HTTP status code: ' + response.statusCode);
//         }
//     })
//     .on('error', function (err) {
//         throw new Error('File download error: ' + err);
//     })
//     .pipe(file);
/*
									file.on('finish', function () {
										file.close();
										gutil.log('Unzip to: ' + path.join(path.dirname(dependenciesjson), archive.dest));
										gulp.src(path.join(_tempPath, archive.archiveName))
											.pipe(unzip())
											.pipe(gulp.dest(path.join(path.dirname(dependenciesjson), archive.dest)))
											.on('end', function () {
												gutil.log('Validate download files.');
												archive.files.forEach(function (file) {
													gutil.log('Checking download file:' + file);
													if (!fs.existsSync(path.join(path.dirname(dependenciesjson), archive.dest, file))) {
														throw new Error('File expected does not exist: ' + path.join(path.dirname(dependenciesjson), archive.dest, file));
													}
												})

												gutil.log('Remove download .zip file.');
												shell.rm(path.join(_tempPath, archive.archiveName));
												finishedarchiveCount++;
												if (finishedarchiveCount == archives.length) {
													finisheddependenciesjson++;
													if (finisheddependenciesjson == alldependenciesjson.length) {
														gutil.log('Finished all dependencies download.');
														deferred.resolve();
													}
												}
											});
									});
								});
							} else {
								deferred.resolve();
							}
						});
					} else {
						deferred.resolve();
					}
*/
