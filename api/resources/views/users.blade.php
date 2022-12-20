<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
  </head>
  <body>
    <div class="container pt-5">
        <div class="row">
            <div class="col-md-12">
                @if(Session::has('success'))
                    <div class="alert alert-success">
                        {{ Session::get('success') }}
                    </div>
                @endif
            </div>
            <div class="col-md-12">
            <form class="row g-3" action="{{route('import_user')}}"  method=post enctype="multipart/form-data">
                @csrf
                <div class="col-auto">
                    <label class="visually-hidden">Excel</label>
                    <input type="file" class="form-control" name="excel_file">
                </div>
                
                <div class="col-auto">
                    <button type="submit" class="btn btn-primary mb-3">Upload excel file</button>
                </div>
                @error('excel_file')
                    <span class="text-danger">{{ $message }}</span>
                @enderror
            </form>
           
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <h3>User List </h3>
            </div>
            <div class="col-md-12">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        @if(count($users)))
                        @foreach($users as $user)
                        <tr>
                            <th scope="row">{{ $user->id }}</th>
                            <td>{{ $user->name }}</td>
                            <td>{{ $user->email }}</td>
                        </tr>
                        @endforeach
                        @else
                        <tr>
                            <td colspan="3">No users found</td>
                        </tr>
                        @endif
                </table>      
            </div>
        </div>
    </div>

    







    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
  </body>
</html>