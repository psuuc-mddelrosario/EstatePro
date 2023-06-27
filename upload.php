<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Validate and process the uploaded image
  if (isset($_FILES['image']) && $_FILES['image']['error'] === UPLOAD_ERR_OK) {
    $imageTmpPath = $_FILES['image']['tmp_name'];
    $imageName = $_FILES['image']['name'];
    $imagePath = 'uploads/' . $imageName; // Adjust the path as per your requirements

    // Move the uploaded image to the desired location
    if (move_uploaded_file($imageTmpPath, $imagePath)) {
      // Image uploaded successfully, you can store the image path in a database or perform any other desired operation
      echo 'Image uploaded successfully: ' . $imagePath . '<br>';
    } else {
      echo 'Failed to move the uploaded image to the destination folder.<br>';
    }
  } else {
    echo 'Error uploading the image.<br>';
  }

  // Process the text data
  $textData = $_POST['text'];
  // Store or process the text data as per your requirements
  echo 'Text data: ' . $textData;
}
?>
