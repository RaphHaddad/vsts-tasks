var fs = require('fs');
var syncRequest = require('sync-request');
var shell = require('shelljs');


// STAT
var file = 'c:\\temp\\7zip.zip'
console.log('Stat: ' + file);
try {
    console.log(fs.statSync(file));
}
catch (err) {
    console.log(err.code);
}

// RM
if (shell.test('-f', file)) {
    console.log('Removing ' + file);
    shell.rm(file);
}

// STAT
console.log('Stat: ' + file);
try {
    console.log(fs.statSync(file));
}
catch (err) {
    console.log(err.code);
}

// DOWNLOAD
console.log('Downloading');
var result = syncRequest('GET', 'https://vstsagenttools.blob.core.windows.net/tools/7zip/1/7zip.zip');
fs.writeFileSync(file, result.getBody());
// // var stream = fs.createWriteStream(file);
// // request.get('https://vstsagenttools.blob.core.windows.net/tools/7zip/1/7zip.zip')
// //     .on('response', function (response) {
// //         if (response.statusCode != 200) {
// //             throw new Error('File download error. HTTP status code: ' + response.statusCode);
// //         }
// //     })
// //     .on('error', function (err) {
// //         throw new Error('File download error: ' + err);
// //     })
// //     .pipe(stream)
// //     .finish();

// // WAIT
// console.log('Waiting');
// stream.on('finish', function () {
//     stream.close();
// });

// STAT
console.log('Stat: ' + file);
try {
    console.log(fs.statSync(file));
}
catch (err) {
    console.log(err.code);
}




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
