@extends('layout.main')
@section('content')
    <div>
        @if($errors)
            @foreach($errors->all() as $error)
                {{ $error }} <br>
            @endforeach
        @endif
    </div>
    <form action="{{route('blog.store')}}" method="post">
        @csrf
        <lable>Name</lable>
        <input type="text" name="title">
        <br>
        <lable>Desc</lable>
        <input type="text" name="description">
        <button type="submit">Submit</button>
    </form>
@endsection
